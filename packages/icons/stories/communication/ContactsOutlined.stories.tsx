import type { Meta, StoryObj } from '@storybook/react';

import ContactsOutlined from '../../lib/communication/ContactsOutlined';

const meta: Meta<typeof ContactsOutlined> = {
  component: ContactsOutlined,
  tags: ['autodocs'],
  title: 'communication/ContactsOutlined',
};

export default meta;
type Story = StoryObj<typeof ContactsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

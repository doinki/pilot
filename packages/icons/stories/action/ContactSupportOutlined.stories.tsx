import type { Meta, StoryObj } from '@storybook/react';

import ContactSupportOutlined from '../../lib/action/ContactSupportOutlined';

const meta: Meta<typeof ContactSupportOutlined> = {
  component: ContactSupportOutlined,
  tags: ['autodocs'],
  title: 'action/ContactSupportOutlined',
};

export default meta;
type Story = StoryObj<typeof ContactSupportOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

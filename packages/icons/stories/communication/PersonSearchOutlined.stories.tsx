import type { Meta, StoryObj } from '@storybook/react';

import PersonSearchOutlined from '../../lib/communication/PersonSearchOutlined';

const meta: Meta<typeof PersonSearchOutlined> = {
  component: PersonSearchOutlined,
  tags: ['autodocs'],
  title: 'communication/PersonSearchOutlined',
};

export default meta;
type Story = StoryObj<typeof PersonSearchOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

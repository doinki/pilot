import type { Meta, StoryObj } from '@storybook/react';

import EmailOutlined from '../../lib/communication/EmailOutlined';

const meta: Meta<typeof EmailOutlined> = {
  component: EmailOutlined,
  tags: ['autodocs'],
  title: 'communication/EmailOutlined',
};

export default meta;
type Story = StoryObj<typeof EmailOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

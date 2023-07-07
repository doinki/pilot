import type { Meta, StoryObj } from '@storybook/react';

import PrintOutlined from '../../lib/action/PrintOutlined';

const meta: Meta<typeof PrintOutlined> = {
  component: PrintOutlined,
  tags: ['autodocs'],
  title: 'action/PrintOutlined',
};

export default meta;
type Story = StoryObj<typeof PrintOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

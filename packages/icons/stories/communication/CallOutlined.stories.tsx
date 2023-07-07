import type { Meta, StoryObj } from '@storybook/react';

import CallOutlined from '../../lib/communication/CallOutlined';

const meta: Meta<typeof CallOutlined> = {
  component: CallOutlined,
  tags: ['autodocs'],
  title: 'communication/CallOutlined',
};

export default meta;
type Story = StoryObj<typeof CallOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

import type { Meta, StoryObj } from '@storybook/react';

import CallEndOutlined from '../../lib/communication/CallEndOutlined';

const meta: Meta<typeof CallEndOutlined> = {
  component: CallEndOutlined,
  tags: ['autodocs'],
  title: 'communication/CallEndOutlined',
};

export default meta;
type Story = StoryObj<typeof CallEndOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

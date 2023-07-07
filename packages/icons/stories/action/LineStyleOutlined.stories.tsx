import type { Meta, StoryObj } from '@storybook/react';

import LineStyleOutlined from '../../lib/action/LineStyleOutlined';

const meta: Meta<typeof LineStyleOutlined> = {
  component: LineStyleOutlined,
  tags: ['autodocs'],
  title: 'action/LineStyleOutlined',
};

export default meta;
type Story = StoryObj<typeof LineStyleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

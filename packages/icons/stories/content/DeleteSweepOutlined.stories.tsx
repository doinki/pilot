import type { Meta, StoryObj } from '@storybook/react';

import DeleteSweepOutlined from '../../lib/content/DeleteSweepOutlined';

const meta: Meta<typeof DeleteSweepOutlined> = {
  component: DeleteSweepOutlined,
  tags: ['autodocs'],
  title: 'content/DeleteSweepOutlined',
};

export default meta;
type Story = StoryObj<typeof DeleteSweepOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

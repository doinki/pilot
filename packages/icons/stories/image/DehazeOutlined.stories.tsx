import type { Meta, StoryObj } from '@storybook/react';

import DehazeOutlined from '../../lib/image/DehazeOutlined';

const meta: Meta<typeof DehazeOutlined> = {
  component: DehazeOutlined,
  tags: ['autodocs'],
  title: 'image/DehazeOutlined',
};

export default meta;
type Story = StoryObj<typeof DehazeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

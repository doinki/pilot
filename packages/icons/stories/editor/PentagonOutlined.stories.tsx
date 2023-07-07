import type { Meta, StoryObj } from '@storybook/react';

import PentagonOutlined from '../../lib/editor/PentagonOutlined';

const meta: Meta<typeof PentagonOutlined> = {
  component: PentagonOutlined,
  tags: ['autodocs'],
  title: 'editor/PentagonOutlined',
};

export default meta;
type Story = StoryObj<typeof PentagonOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

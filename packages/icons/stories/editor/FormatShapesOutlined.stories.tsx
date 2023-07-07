import type { Meta, StoryObj } from '@storybook/react';

import FormatShapesOutlined from '../../lib/editor/FormatShapesOutlined';

const meta: Meta<typeof FormatShapesOutlined> = {
  component: FormatShapesOutlined,
  tags: ['autodocs'],
  title: 'editor/FormatShapesOutlined',
};

export default meta;
type Story = StoryObj<typeof FormatShapesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

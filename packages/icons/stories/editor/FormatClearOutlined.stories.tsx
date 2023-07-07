import type { Meta, StoryObj } from '@storybook/react';

import FormatClearOutlined from '../../lib/editor/FormatClearOutlined';

const meta: Meta<typeof FormatClearOutlined> = {
  component: FormatClearOutlined,
  tags: ['autodocs'],
  title: 'editor/FormatClearOutlined',
};

export default meta;
type Story = StoryObj<typeof FormatClearOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

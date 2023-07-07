import type { Meta, StoryObj } from '@storybook/react';

import FormatColorResetOutlined from '../../lib/editor/FormatColorResetOutlined';

const meta: Meta<typeof FormatColorResetOutlined> = {
  component: FormatColorResetOutlined,
  tags: ['autodocs'],
  title: 'editor/FormatColorResetOutlined',
};

export default meta;
type Story = StoryObj<typeof FormatColorResetOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

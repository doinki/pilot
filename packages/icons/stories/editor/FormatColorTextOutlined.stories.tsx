import type { Meta, StoryObj } from '@storybook/react';

import FormatColorTextOutlined from '../../lib/editor/FormatColorTextOutlined';

const meta: Meta<typeof FormatColorTextOutlined> = {
  component: FormatColorTextOutlined,
  tags: ['autodocs'],
  title: 'editor/FormatColorTextOutlined',
};

export default meta;
type Story = StoryObj<typeof FormatColorTextOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

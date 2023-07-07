import type { Meta, StoryObj } from '@storybook/react';

import FormatLineSpacingOutlined from '../../lib/editor/FormatLineSpacingOutlined';

const meta: Meta<typeof FormatLineSpacingOutlined> = {
  component: FormatLineSpacingOutlined,
  tags: ['autodocs'],
  title: 'editor/FormatLineSpacingOutlined',
};

export default meta;
type Story = StoryObj<typeof FormatLineSpacingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

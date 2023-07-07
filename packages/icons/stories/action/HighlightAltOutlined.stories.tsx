import type { Meta, StoryObj } from '@storybook/react';

import HighlightAltOutlined from '../../lib/action/HighlightAltOutlined';

const meta: Meta<typeof HighlightAltOutlined> = {
  component: HighlightAltOutlined,
  tags: ['autodocs'],
  title: 'action/HighlightAltOutlined',
};

export default meta;
type Story = StoryObj<typeof HighlightAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

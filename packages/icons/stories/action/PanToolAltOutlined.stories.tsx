import type { Meta, StoryObj } from '@storybook/react';

import PanToolAltOutlined from '../../lib/action/PanToolAltOutlined';

const meta: Meta<typeof PanToolAltOutlined> = {
  component: PanToolAltOutlined,
  tags: ['autodocs'],
  title: 'action/PanToolAltOutlined',
};

export default meta;
type Story = StoryObj<typeof PanToolAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

import type { Meta, StoryObj } from '@storybook/react';

import FullscreenExitOutlined from '../../lib/navigation/FullscreenExitOutlined';

const meta: Meta<typeof FullscreenExitOutlined> = {
  component: FullscreenExitOutlined,
  tags: ['autodocs'],
  title: 'navigation/FullscreenExitOutlined',
};

export default meta;
type Story = StoryObj<typeof FullscreenExitOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

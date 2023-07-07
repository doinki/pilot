import type { Meta, StoryObj } from '@storybook/react';

import TuneOutlined from '../../lib/image/TuneOutlined';

const meta: Meta<typeof TuneOutlined> = {
  component: TuneOutlined,
  tags: ['autodocs'],
  title: 'image/TuneOutlined',
};

export default meta;
type Story = StoryObj<typeof TuneOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };

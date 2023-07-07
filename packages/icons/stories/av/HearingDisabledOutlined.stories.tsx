import type { Meta, StoryObj } from '@storybook/react';

import HearingDisabledOutlined from '../../lib/av/HearingDisabledOutlined';

const meta: Meta<typeof HearingDisabledOutlined> = {
  component: HearingDisabledOutlined,
  tags: ['autodocs'],
  title: 'av/HearingDisabledOutlined',
};

export default meta;
type Story = StoryObj<typeof HearingDisabledOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
